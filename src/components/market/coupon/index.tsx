import { Text, View } from "react-native";
import { IconArrowLeft, IconTicket } from "@tabler/icons-react-native";

import { router } from "expo-router";
import { s } from "./styles";
import { Button } from "@/components/button";
import { colors } from "@/styles/theme";

type Props = {
    code: string
}

export function Coupon({ code }: Props) {
    return (
        <View style={s.container}>
            <Text style={s.title}>Utilize esse cupom</Text>

            <View style={s.content}>
                <IconTicket size={24} color={colors.green.light} />
                <Text style={s.code}>{code}</Text>
            </View>
        </View>
    )
}
