import FetchHttpClient from "../http";

export default class Dog {
    constructor(breed) {
        this.breed = breed;
        this.subBreeds = [];
        this.images = [];
        this._http = new FetchHttpClient();
    }

    async listSubBreeds() {
        if (this.subBreeds.length) {
            return this.subBreeds;
        }

        const url = `/api/breed/${this.breed}/list`;
        const response = await this._http.get(url);
        if (response.status !== 'success') {
            throw new Error(`Request failed with ${response.status} status`)
        }
        
        this.subBreeds = response.message;
        return response.message;
    }

    async listImages() {
        if (this.images.length) {
            return this.images;
        }
        
        const url = `/api/breed/${this.breed}/images`;
        const response = await this._http.get(url);

        if (response.status !== 'success') {
            throw new Error(`Request failed with ${response.status} status`)
        }

        this.images = response.message;
        return this.images;
    }

    async randomImage() {
        const url = `/api/breed/${this.breed}/images/random`;
        const response = await this._http.get(url);

        if (response.status !== 'success') {
            throw new Error(`Request failed with ${response.status} status`)
        }

        return response.message;
    }
}