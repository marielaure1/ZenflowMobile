// not-authed-tabs.tsx
import { Stack } from 'expo-router';

export default function NotAuthedTabs() {
  return (
    <Stack>
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
