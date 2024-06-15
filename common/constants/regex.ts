const regex = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$/,
    phone: /^(\+?\d{1,3}[-.\s]?|0)?\d{9,12}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

};

export default regex;