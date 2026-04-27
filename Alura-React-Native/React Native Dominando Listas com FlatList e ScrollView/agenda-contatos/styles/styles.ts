import { StyleSheet } from "react-native";
import material_theme from "./material-theme.json";

const theme = material_theme.schemes.light;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryContainer,
    color: theme.onPrimaryContainer,
    padding: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  secondaryContainer: {
    backgroundColor: theme.secondaryContainer,
    color: theme.onSecondaryContainer,
    padding: 10,
    borderRadius: 15,
    borderColor: theme.secondary,
    borderWidth: 0,
    borderLeftWidth: 4,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.onSecondaryContainer,
  },
  body: {
    fontSize: 12,
    fontWeight: "normal",
    color: theme.onSecondaryContainer,
  },
  textInput: {
    backgroundColor: theme.surfaceDim,
    color: theme.onSurfaceVariant,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: theme.onSurface,
  },
  header: {
    backgroundColor: theme.onPrimary,
    padding: 30,
    alignItems: "center",
    color: theme.onPrimaryContainer,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.onPrimaryContainer,
  },
  flatListContainer: {
    borderColor: theme.onSecondary,
    borderWidth: 3,
    marginBottom: 10,
  },
  flatListSeparator: {
    marginHorizontal: 5,
    marginVertical: 10,
    borderTopWidth: 2,
    borderTopColor: theme.onSecondary,
  },
  footer: {
    backgroundColor: theme.primary,
    padding: 20,
    alignItems: "flex-end",
  },
  footerText: {
    fontSize: 16,
    fontStyle: "italic",
    color: theme.onPrimaryContainer,
  },
  listaHeader: {
    paddingVertical: 12,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
  },
  listaFooter: {
    paddingVertical: 24,
    alignItems: "center",
  },
  footerCredits: {
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    lineHeight: 18,
  },
  itemSeparator: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  itemSeparatorLine: {
    height: 1,
    backgroundColor: "rgba(180, 180, 180, 0.1)",
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  emptyListSubtitle: {
    opacity: 0.6,
  },
});
export { styles, theme };

