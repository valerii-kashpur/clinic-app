import { useRef } from "react";

export function usePureCallback<Deps extends any[], Args extends any[], Return>(
    deps: Deps,
    fn: (deps: Deps, ...args: Args) => Return
): (...args: Args) => Return {
    const argsRef = useRef({
        fn: (...args: Args) => fn(argsRef.current.deps, ...args),
        deps
    });
    argsRef.current.deps = deps;
    return argsRef.current.fn;
}