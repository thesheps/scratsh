import { App } from "@aws-cdk/core";
import { ScratSHStack } from "./ScratSHStack";

const app = new App();

new ScratSHStack(app, { environment: 'dev' });
