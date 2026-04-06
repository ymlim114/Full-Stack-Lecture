export namespace Utils{

    export function clamp(n:number, min:number, max:number){
        return Math.max(min, Math.min(max, n)); // clamp(5, 0, 10) retrun 5
    }

    export namespace Str{
        export function capitalize(s:string){
            return s.length ? s[0].toUpperCase() + s.slice(1) : s ;
        }
    }
}

const v1 = Utils.clamp(5, 0, 10); // 5
const v2 = Utils.Str.capitalize('typescript');
console.log(v1, v2);