import { useStripe } from '@stripe/stripe-react-native';
import { Button } from 'react-native';

function PaymentScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const fetchCheckoutSession = async () => {
    const response = await fetch('/create-checkout-session', { 
      method: 'POST',
      // ... autres détails de la requête
    });
    const { url } = await response.json();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: url,
      merchantDisplayName: 'Zenflow',
    });

    if (!error) {
      const { error: presentError } = await presentPaymentSheet();
      if (presentError) {
        // Gérez l'erreur d'affichage de la Payment Sheet
      } else {
        // Paiement réussi
      }
    }
  };

  return (
    <Button title="S'abonner" onPress={fetchCheckoutSession} />
  );
}

export default PaymentScreen;
