export default {
    methods: {
        uppercaseFirstLetter(text) {
            return text[0].toUpperCase() + text.slice(1).toLowerCase();
        },
        stringToASCIISum(value) {
            return value.split('')
                        .map((char) => {
                               return char.charCodeAt(0);
                         })
                        .reduce((curr, prev) => {
                                return prev + curr;
                         });
          }
    }
}