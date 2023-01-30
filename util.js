export default {
    compose: (...args) => arg => 
        args.reduce((arg, f) => f(arg), arg)
}