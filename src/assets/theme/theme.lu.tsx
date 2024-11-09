// import { createContext, useState, ReactNode, useContext } from "react";

// // Define the context type
// interface ThemeContextType {
//   theme: string;
//   toggleTheme: () => void;
// }

// // Create the context
// export const ThemeContext = createContext<ThemeContextType | null>(null);

// // Create the provider component
// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<string>("yellow");

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "yellow" ? "brown" : "yellow"));
//   };

//   // Provide the theme and toggle function to children
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to use the ThemeContext
// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
