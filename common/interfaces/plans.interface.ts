interface PlansProps{
    name :string;
    description :string;
    amount :number;
    currency :string;
    interval :string;
    stripePlanId :string;
    features? :string[];
}

export default PlansProps;