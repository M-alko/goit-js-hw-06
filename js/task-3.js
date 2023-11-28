class StringBuilder {
    #value;
    constructor(initialValue = '') {
        this.#value = initialValue;
    }
    
    getValue() {
        return this.#value;
    };
    
    padEnd(targetLength,padString ) {
        this.#value =  this.#value.padEnd(targetLength, padString)
    };

    padStart(targetLength, padString) {
        this.#value =  this.#value.padStart(targetLength, padString)

    };
    padBoth(targetLength, padString) {
        const padLength = targetLength - this.#value.length;
    const padStartLength = Math.floor(padLength / 2);

    this.#value = this.#value.padStart(padStartLength + this.#value.length, padString);
    }
};








const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="