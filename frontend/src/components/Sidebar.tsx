import { StyleSheet, View, Image, FlatList, useWindowDimensions } from "react-native";

import NavButton from "./NavButton";

interface navButtonData {
    id: string,
    name: string,
    icon: string,
}

const navButtons: navButtonData[] = [
    {
        id: '1',
        name: 'Inicio',
        icon: 'home'
    },
    {
        id: '2',
        name: 'Z3T Arcade',
        icon: 'sports_esports'
    },
    {
        id: '3',
        name: 'Monedero',
        icon: 'account_balance_wallet'
    },
    {
        id: '4',
        name: 'Logros',
        icon: 'military_tech'
    },
    {
        id: '5',
        name: 'Personalización',
        icon: 'palette'
    },
    {
        id: '6',
        name: 'Buscar amigos',
        icon: 'groups'
    },
    {
        id: '7',
        name: "Configuración",
        icon: 'settings'
    },
    {
        id: '8',
        name: 'Cerrar sesión',
        icon: 'logout'
    },
];

export default function Sidebar() {
    const { width } = useWindowDimensions();
    const isMobile = width <= 768;

    const renderNavButton = ({ item }: { item: navButtonData }) => (
        <NavButton name={item.name} icon={item.icon} />
    );

    return (
        <View style={[styles.container, isMobile && { display: "none" }]}>
            <View style={styles.sidebar}>
                {/* Logo */}
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={styles.logoImg}
                    resizeMode="contain"
                />

                {/* Navigation Buttons */}
                <View>
                    <FlatList
                        data={navButtons}
                        renderItem={renderNavButton}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 0,
        alignItems: "flex-end",
        minWidth: 0,
        maxWidth: 591,
        userSelect: "none",
    },
    sidebar: {
        gap: 16,
        padding: 8,
        width: 256,
    },
    logoImg: {
        marginHorizontal: 8,
        width: 64,
        height: 64,
    },
});