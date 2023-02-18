import React, { Component } from "react";
import ErrorScreen from "./ErrorScreen";

export default class ErrorBoundary extends Component {
    state = { error: null }

    static getDerivedStateFromError(error) {
        return {error}
    }

    render() {
        const { error } = this.state
        const {children, fallback} = this.props
        const Fallback = fallback || ErrorScreen
        if (error) return <Fallback error={error} />
        return children
    }
}