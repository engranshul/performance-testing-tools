console.log("initializing..")

export function setup() {
  console.log("setting up..")
}

export default function (data) {
  console.log("this is VU code..")
}

export function teardown(data) {
  console.log("tearing down..")
}

/* 
Scripts must contain, at the very least, a default function - this defines
the entry point for your VUs, similar to the main() function in many other languages:

Code inside default is called "VU code", and is run over and over for as long as the test is running. Code outside of it is called "init code", and is run only once per VU.

VU code can make HTTP requests, emit metrics, and generally do everything you'd 
expect a load test to do - with a few important exceptions: you can't load 
anything from your local filesystem, or import any other modules. 
This all has to be done from the init code.
*/