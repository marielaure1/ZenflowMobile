import Stripe from '@stripe/stripe-react-native';

function StripeProvider({children}) {
  return (
    <Stripe.StripeProvider
      publishableKey="pk_test_51PIXSSBeBuYyYbKHcwP5cVEURIOhPgHfZKJClwMx89Zel4YWKEa4PWgI57c1J4Ny1ZTqx12RbM1S3wCktFUWwpNG00eDHtPVGy"
    //   urlScheme="your-url-scheme" 
    //   merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
    >
      {children}
    </Stripe.StripeProvider>
  );
}

export default StripeProvider;