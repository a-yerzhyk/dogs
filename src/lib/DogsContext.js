import FetchHttpClient from "../http";

export default class DogsContext {
    constructor () {
        this._http = new FetchHttpClient();
    }

    async list() {
        const url = '/api/breeds/list/all';
        const response = await this._http.get(url);
        if (response.status !== 'success') {
            throw new Error(`Request failed with ${response.status} status`)
        }

        return response.message;
    }

    async listImages(breed) {       
        const url = `/api/breed/${breed}/images`;
        const response = await this._http.get(url);

        if (response.status !== 'success') {
            throw new Error(`Request failed with ${response.status} status`)
        }
        
        return response.message;
    }

    async randomImage() {
        const url = '/api/breeds/image/random';
        const response = await this._http.get(url);
        if (response.status !== 'success') {
            throw new Error(`Request failed with ${response.status} status`)
        }

        return response.message;
    }
}