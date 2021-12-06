import * as RN from "react-native";
import * as RNE from "react-native-elements";
import { withTailwind } from "./withTailwind";

// react native
export const Text = withTailwind(RN.Text);
export const SafeAreaView = withTailwind(RN.SafeAreaView);
export const View = withTailwind(RN.View);
export const TouchableOpacity = withTailwind(RN.TouchableOpacity);
export const Image = withTailwind(RN.Image);
// react native elements
export const Icon = withTailwind(RNE.Icon);
export const Divider = withTailwind(RNE.Divider);
