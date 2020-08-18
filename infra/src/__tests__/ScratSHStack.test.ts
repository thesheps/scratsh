import { expect as expectCdk, haveResource } from "@aws-cdk/assert";
import { App } from "@aws-cdk/core";
import { ScratSHStack } from "../ScratSHStack";

describe("ScratSHStack", () => {
  it("contains an S3 bucket", () => {
    const stack = new ScratSHStack(new App(), { environment: 'test' });
    
    expectCdk(stack).to(haveResource("AWS::S3::Bucket", {
      BucketName: 'scratsh-test',
      WebsiteConfiguration: {
        IndexDocument: 'index.html',
      },
    }));
  });
});
