
import districts from './districts.json'
import wards from './wards.json'
import type from './type.json'
import dientich from './dientich.json'
import price from './price.json'

const ConvertPrc =  (prc) =>{
    const cst = String(prc).split("").reverse().join("");

    if(cst.length > 3 && cst.length < 7) // 1.000 -> 999.999
    {
        return (cst.substr(0,3) + "." + cst.substr(3)).split("").reverse().join("");
    }
    else if (cst.length > 6 && cst.length < 9) // 1.000.000 -> 50.000.000
    {
        return (cst.substr(0,3) + "." + cst.substr(3,3) + "." + cst.substr(6)).split("").reverse().join("");
    }
}

const ConvertTypeMT =  (tp) =>{
    if(tp == "A")
        return "Phòng trọ"
    else if(tp == "B")
        return "Nhà nguyên căn"
    else if(tp == "C")
        return "Chung cư"
    else if(tp == "D")
        return "Nhà phố"
    else if (tp == "E")
        return "Nhà ở ghép"
}

const convertLocal = (dt, wrd) =>{
    const district = districts[parseInt(dt)].name
    const wd = wards[parseInt(dt)].name[parseInt(wrd)]
    return {
        dst : district,
        ward: wd
    }
}
export {ConvertPrc, ConvertTypeMT, convertLocal};