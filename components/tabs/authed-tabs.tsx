// authed-tabs.tsx
import { Stack } from 'expo-router';

export default function AuthedTabs() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="explore" options={{ headerShown: false }} />
    </Stack>
  );
}
