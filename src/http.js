export default class FetchHttpClient {

    constructor() {
        this.baseUrl = 'https://dog.ceo';
    }

    async send(config) {
        const absoluteUrl =
            config.url && (config.url.startsWith("http://") || config.url.startsWith("https://"))
                ? config.url
                : this.baseUrl + (config.url || "");
        if (!absoluteUrl) {
            throw new Error("url is required");
        }

        const mergedConfig = {responseType: 'json', ...config}
        const request = this.createRequest(absoluteUrl, config)
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`Status ${response.status} (${response.statusText}) does not indicate success`)
        }

        const contentType = response.headers.get("content-type");
        const hasContent = response.status !== 204 && !!contentType;

        let data = null;
        
        if (hasContent) {
            switch (mergedConfig.responseType) {
                case "json":
                    if (contentType && 
                    (contentType.includes("application/json") || contentType.includes("application/problem+json"))) {
                    data = (await response.json());
                    break;
                    }
                    throw new Error(`Expected 'json' response but got content-type : '${contentType}'`);
                case "text":
                    data = (await response.text());
                    break;
                default:
                    throw new Error("Not implemented");
            }
        }

        return data;
    }

    get(url, config) {
        return this.send({
            method: "GET",
            url,
            ...(config || {})
        });
    }

    createRequest(absoluteUrl, config) {
        const headers = new Headers(config.headers);
        const requestInit = {
            method: config.method,
            cache: 'no-cache',
            headers,
            mode: 'cors',
            referrer: "no-referrer"
        };

        if (config.body) {
            requestInit.body = config.body;
            requestInit.headers.set("Content-Type", "application/json");
        }

        return new Request(absoluteUrl, requestInit);
    }
}