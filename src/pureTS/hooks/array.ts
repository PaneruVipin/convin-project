export function useArrayConverter(array:any[]){
    const videos= array.reduce(
        (prevValue:any,value:any)=>({...prevValue,[value.id]:value}),
        {})
        return videos
}