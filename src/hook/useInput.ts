import { ChangeEvent, useState } from "react";


const useInput = <T>(init:any) => {

    let [obj, setObj] = useState<T>(init); // {type: '닉네임', searchItem: ''}

    const onInputChange = (e:ChangeEvent) => {
        let {name,value} = e.target as HTMLInputElement;
        // 위는 아래와 같다
        // let name = (e.target as HTMLInputElement).name;
        // let value = (e.target as HTMLInputElement).value;
        setObj({
            ...obj,
            [name] : value
            // name : value => "name" : (변수 value의 값)
            // [name] : value => "(변수 name의 값)" : (변수 value의 값)
            // 만일 (변수 name의 값)이 이미 string 타입이라면 따로 ""를 붙이지 않는다
        });
    }
    return [obj, onInputChange] as const;
}
export default useInput;