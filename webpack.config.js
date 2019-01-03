
// super basic webpack config
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx) $/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

/*
every file with js or jsx exension webpack pipes the code through babel-loader
transofrming ES6 to ES5 for older browsers. 
*/