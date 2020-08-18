import { ScratSHStackConfig } from "./ScratSHStackConfig";

export const enrichResourceName = (name: string, config: ScratSHStackConfig): string => {
    return `${name}-${config.environment}`
}