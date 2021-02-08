import tracer from 'dd-trace'

tracer.init({
    enabled: true,
    analytics: true,
    service: "evenOdd-api",
    version: "2.0.0",
    runtimeMetrics: true,
    port: 8126
});

tracer.use('express');
tracer.use('http');
tracer.use('http2');

export default tracer;
