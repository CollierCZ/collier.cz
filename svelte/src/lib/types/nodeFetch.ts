declare function nodeFetch(
  url: RequestInfo,
  init?: RequestInit
): Promise<Response>;

export default nodeFetch