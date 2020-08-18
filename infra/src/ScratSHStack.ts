import { Construct, Stack } from "@aws-cdk/core";
import { Bucket } from '@aws-cdk/aws-s3'
import { ScratSHStackConfig } from "./config/ScratSHStackConfig";
import { enrichResourceName } from "./config/enrichResourceName";

export class ScratSHStack extends Stack {
  constructor(scope: Construct, config: ScratSHStackConfig) {
    super(scope);

    new Bucket(this, 'WebsiteBucket', {
      bucketName: enrichResourceName('scratsh', config),
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    })
  }
}
