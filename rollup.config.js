import terser from "@rollup/plugin-terser";


const devMode = (process.env.NODE_ENV == 'development');
console.log(`${devMode ? 'development ' : 'production ' } mode bundle`);


export default[
    {
        input: 'src/index.js',
        output: {
            file: "dist/index.js",
            format: "es",
            sourcemap: devMode ? 'inline': false,
            Plugins: [
                terser({
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows:true,
                        drop_console:!devMode,
                        drop_debugger:!devMode
                    },
                    output: {quote_style: 1}
                })
            ]
        }
    }
]