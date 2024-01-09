// import { createContext, useContext, useState } from "react";

// const UiContext = createContext();

// const UiProvider = ({ children }) => {
//   const [showSideBar, SetShowSideBar] = useState(false);

//   function HandleSideBar() {
//     SetShowSideBar(true);
//   }

//   return (
//     <UiContext.Provider value={{ showSideBar, HandleSideBar }}>
//       {children}
//     </UiContext.Provider>
//   );
// };

// const useUiContext = () => {
//   const context = useContext(UiContext);
//   if (context === undefined)
//     throw new Error("UiContext is used outside UiProvider");
//   return context;
// };

// export { useUiContext, UiProvider };
