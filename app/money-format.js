const formatAmount = (value) =>{
    return new Intl.NumberFormat().format(value)
}

export default formatAmount