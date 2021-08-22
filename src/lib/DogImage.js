import Dog from "@/lib/Dog";

export default class DogImage {
    constructor(breed, image, ) {
        this.dog = new Dog(breed);
        this.image = image ?? '';
        this.id = this.generateId();
    }

    async getImage() {
        if (this.image) {
            return this.image;
        }

        this.image = await this.dog.randomImage();
        return this.image;
    }

    generateId() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}