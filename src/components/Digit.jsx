import {useParams} from "react-router-dom"

export default function Digit () {
    const params = useParams()
    console.log(params)
    const {digitParam, thisIsAname} = params
    console.log(digitParam)
    console.log(thisIsAname)

    console.log(params.digitParam)
    console.log(params.thisIsAname)


    return (
        <h2>El numero recibido es: {digitParam}</h2>
    )
}