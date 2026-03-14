import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="pokemondetails"
        options={{
          title: "Details",
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet", //can also be "modal" or "transparentModal" for different styles of presentation
          sheetAllowedDetents: [0.3, 0.5, 0.75], // Allow the sheet to be dragged to 50%, 75%, or full height
          sheetGrabberVisible: true, // Show a grabber at the top of the sheet for better UX when dragging
          headerShown: true, // Show the header for the details screen
        }}
      />
    </Stack>
  );
}
