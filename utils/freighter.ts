// utils/freighter.ts

import {
    isConnected,
    isAllowed,
    setAllowed,
    requestAccess,
    getAddress,
  } from "@stellar/freighter-api";
  
  // Function to check if Freighter is connected
  export const checkFreighterConnection = async (): Promise<boolean> => {
    try {
      const connection = await isConnected();
      return connection.isConnected;
    } catch (error) {
      console.error("Error checking Freighter connection:", error);
      return false;
    }
  };
  
  // Function to check if the app is allowed to access Freighter
  export const checkFreighterAllowed = async (): Promise<boolean> => {
    try {
      const allowed = await isAllowed();
      return allowed.isAllowed;
    } catch (error) {
      console.error("Error checking if app is allowed:", error);
      return false;
    }
  };
  
  // Function to set the app as allowed in Freighter
  export const allowFreighterAccess = async (): Promise<boolean> => {
    try {
      const result = await setAllowed();
      if (result.error) {
        console.error("Error setting app as allowed:", result.error);
        return false;
      }
      return result.isAllowed;
    } catch (error) {
      console.error("Exception in allowing Freighter access:", error);
      return false;
    }
  };
  
  // Function to request access and get the user's public address
  export const requestFreighterAccess = async (): Promise<string | null> => {
    try {
      const accessObj = await requestAccess();
      if (accessObj.error) {
        console.error("Error requesting access:", accessObj.error);
        return null;
      }
      return accessObj.address;
    } catch (error) {
      console.error("Exception in requesting access:", error);
      return null;
    }
  };
  
  // Function to get the user's public address (lightweight)
  export const getFreighterAddress = async (): Promise<string | null> => {
    try {
      const addressObj = await getAddress();
      if (addressObj.error) {
        console.error("Error getting address:", addressObj.error);
        return null;
      }
      return addressObj.address || null;
    } catch (error) {
      console.error("Exception in getting address:", error);
      return null;
    }
  };
  
  // Main function to handle the wallet connection
  export const connectFreighterWallet = async (): Promise<string | null> => {
    try {
      // Step 1: Check if Freighter is connected
      const connected = await checkFreighterConnection();
      if (!connected) {
        alert("Freighter is not connected. Please install the Freighter extension.");
        return null;
      }
  
      // Step 2: Check if the app is allowed
      const allowed = await checkFreighterAllowed();
      if (!allowed) {
        const setAllowedResult = await allowFreighterAccess();
        if (!setAllowedResult) {
          alert("Failed to set app as allowed in Freighter.");
          return null;
        }
      }
  
      // Step 3: Get the user's address
      let userAddress = await getFreighterAddress();
      if (!userAddress) {
        userAddress = await requestFreighterAccess();
        if (!userAddress) {
          alert("Failed to retrieve your Stellar address.");
          return null;
        }
      }
  
      return userAddress;
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Wallet connection failed. Please try again.");
      return null;
    }
  };
  