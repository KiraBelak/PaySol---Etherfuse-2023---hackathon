// In your useMirrorWorld.js file

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
  } from "react"
  import { ClusterEnvironment, MirrorWorld } from "@mirrorworld/web3.js"
  
  export const MirrorWorldContext = createContext()
  
  /**
   * Export the `useMirrorWorld` hook to consume the state from our provider
   */
  export function useMirrorWorld() {
    return useContext(MirrorWorldContext)
  }
  
  // Create a storage key that the provider component will use
  // to store the user's refresh_token in the client-side.
  const storageKey = `authentication_demo_refresh_token`
  
  /**
   *  Create a `MirrorWorldProvider` component to provide the user's
   *  authentication logic and our SDK instance to the client
   */
  export const MirrorWorldProvider = ({ children }) => {
    const [mirrorworld, setMirrorworld] = useState()
    const [user, setUser] = useState()
    const isInitialized = useRef(false)
    const [tokens, setTokens] = useState()
  
    /**
     * Logs in the user and updates the provider state
     * when the user successfullly logs in
     */
    async function login() {
      if (!mirrorworld) throw new Error("Mirror World SDK is not initialized")
      const result = await mirrorworld.login()
      if (result.user) {
        setUser(result.user)
        localStorage.setItem(storageKey, result.refreshToken)
      }
    }
  
    async function logout() {
      if (!mirrorworld) throw new Error("Mirror World SDK is not initialized")
      await mirrorworld.logout()
      console.log("logout")
      localStorage.removeItem(storageKey)
      setUser(null)
    }

    /**
     * Helper function to initialize the SDK
     * PS: Remember to replace the `apiKey` with your
     * project's API key from the first step.
     */
    function initialize() {
      const refreshToken = localStorage.getItem(storageKey)
      const instance = new MirrorWorld({
        apiKey: "mw_Ch1dQ08pS32c7AosRdYSnLn534Jpb6SQEeD",
        env: ClusterEnvironment.testnet,
        ...(refreshToken && { autoLoginCredentials: refreshToken }),
      })
  
      /**
       * This event is fired every time the user logs
       * in with the SDK in the browser. You can also listen
       * to this event somewhere else on the app.
       *
       * A full list of events can be found in the API reference:
       * https://docs.mirrorworld.fun/api-reference/js#events--js
       */
      instance.on("auth:refreshToken", async (refreshToken) => {
        if (refreshToken) {
          localStorage.setItem(storageKey, refreshToken)
          const user = await instance.fetchUser()
          setUser(user)
        }
      })
  
      // Set the Mirror World SDK instance
      setMirrorworld(instance)
    }
  
    useEffect(() => {
      if (!isInitialized.current) {
        initialize()
      }
  
      return () => {
        isInitialized.current = true
      }
    }, [])
  
    // funcion para obtener el balance de los tokens
    async function token(){
      const tokens = await mirrorworld.getTokens();
      
      setTokens(tokens.sol);
      return tokens.sol;
    }
    // Finally return the provider with the authentication
    // logic!
    return (
      <MirrorWorldContext.Provider
        value={{
          mirrorworld: mirrorworld,
          user: user,
          login: login,
          logout: logout,
          token: token,
        }}
      >
        {children}
      </MirrorWorldContext.Provider>
    )
  }
  