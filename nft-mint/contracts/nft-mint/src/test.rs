#[cfg(test)]
use super::*;
use soroban_sdk::{Env, Address, testutils::Address as _, Symbol, String};

// Helper function to create a sample charity address for testing
fn create_charity_address(env: &Env) -> Address {
    Address::from_account(env.accounts().generate())
}

#[test]
fn test_mint_nft() {
    let env = Env::default();
    let contract_id = env.register_contract(None, NFTMintingContract);
    let client = NFTMintingContractClient::new(&env, &contract_id);

    let token_id: u64 = 1;
    let charity_address = Address::random(&env);
    let animal_name = String::from_str(&env, "Elephant");
    let species = String::from_str(&env, "African Elephant");
    let description = String::from_str(&env, "Rescued from poaching");
    let image_uri = String::from_str(&env, "https://example.com/elephant.png");

    client.mint_nft(
        &token_id,
        &charity_address,
        &animal_name,
        &species,
        &description,
        &image_uri,
    );

    let token_key = Symbol::new(&env, &token_id.to_string().into());
    let nft: NFT = env.storage().instance().get(&token_key).unwrap();
    assert_eq!(nft.token_id, token_id);
    assert_eq!(nft.animal_name, animal_name);
    assert_eq!(nft.species, species);
    assert_eq!(nft.description, description);
    assert_eq!(nft.image_uri, image_uri);
}

#[test]
fn test_set_token_uri() {
    let env = Env::default();
    let contract_id = env.register_contract(None, NFTMintingContract);
    let client = NFTMintingContractClient::new(&env, &contract_id);

    let token_id: u64 = 2;
    let charity_address = create_charity_address(&env);
    let animal_name = "Tiger".to_string().into();
    let species = "Bengal Tiger".to_string();
    let description = "Rescued from captivity".to_string().into();
    let image_uri = "https://example.com/tiger.png".to_string().into();

    client.mint_nft(
        &token_id,
        &charity_address,
        &animal_name,
        &species,
        &description,
        &image_uri,
    );

    let new_description = "Now thriving in the sanctuary".to_string().into();
    let new_image_uri = "https://example.com/new-tiger.png".to_string().into();

    // Call the set_token_uri function
    client.set_token_uri(&token_id, &new_description, &new_image_uri);

    // Verify that the NFT metadata has been updated
    let token_key = Symbol::new(&env, &token_id.to_string());
    let updated_nft: NFT = env.storage().get(&token_key).unwrap();
    assert_eq!(updated_nft.description, new_description);
    assert_eq!(updated_nft.image_uri, new_image_uri);
}

#[test]
fn test_transfer_ownership() {
    let env = Env::default();
    let contract_id = env.register_contract(None, NFTMintingContract);
    let client = NFTMintingContractClient::new(&env, &contract_id);

    let token_id: u64 = 3;
    let charity_address = create_charity_address(&env);
    let animal_name = "Lion".to_string().into();
    let species = "African Lion".to_string();
    let description = "Rescued and now safe".to_string().into();
    let image_uri = "https://example.com/lion.png".to_string().into();

    client.mint_nft(
        &token_id,
        &charity_address,
        &animal_name,
        &species,
        &description,
        &image_uri,
    );

    let new_owner = create_charity_address(&env);

    // Call the transfer_ownership function
    client.transfer_ownership(&token_id, &new_owner);

    // Verify that the ownership was transferred
    let token_key = Symbol::new(&env, &token_id.to_string().into());
    let nft: NFT = env.storage().get(&token_key).unwrap();
    assert_eq!(nft.charity_address, new_owner);
}
