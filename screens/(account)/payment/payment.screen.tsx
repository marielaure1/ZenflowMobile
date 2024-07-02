import { useStripe } from '@stripe/stripe-react-native';
import { Button } from 'react-native';

function PaymentScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  /// TODO : Cet page doit passer en prio apres la connexion, il ne faut pas en sortir sans avoir payer!

  const fetchCheckoutSession = async () => {
    const response = await fetch('https://84e2-89-84-44-89.ngrok-free.app/api/payments/create-checkout-session', { 
      method: 'POST',
      
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
