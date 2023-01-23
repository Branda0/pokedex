export type Result<Ok, Err> =
  | { status: 'ok'; data: Ok }
  | { status: 'err'; data: Err };
