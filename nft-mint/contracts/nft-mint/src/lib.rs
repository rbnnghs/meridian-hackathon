#![no_std]
use soroban_sdk::{contractimpl, contracttype, contracterror, String, Env, Symbol, Address};

#[contracttype]
pub struct NFT {
    pub token_id: u64,
    pub charity_address: Address,
    pub animal_name: String,
    pub species: String,
    pub description: String,
    pub image_uri: String,
}

#[contracttype]
pub struct NFTMintingContract;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum Error {
    AlreadyExists = 1,
}

#[contractimpl]
impl NFTMintingContract {
    pub fn mint_nft(
        env: Env,
        token_id: u64,
        charity_address: Address,
        animal_name: String,
        species: String,
        description: String,
        image_uri: String
    ) {
        let token_key = Symbol::new(&env, &token_id.to_string().into());
        if env.storage().instance().has(&token_key) {
            panic!("NFT with this ID already exists");
        }

        let new_nft = NFT {
            token_id,
            charity_address,
            animal_name,
            species,
            description,
            image_uri,
        };

        env.storage().instance().set(&token_key, &new_nft);
    }

    pub fn set_token_uri(
        env: Env,
        token_id: u64,
        new_description: String,
        new_image_uri: String,
    ) {
        let token_key = Symbol::new(&env, &token_id.to_string().into());

        let mut nft: NFT = env.storage().instance().get(&token_key).unwrap();

        nft.description = new_description;
        nft.image_uri = new_image_uri;

        env.storage().instance().set(&token_key, &nft);
    }

    pub fn transfer_ownership(
        env: Env,
        token_id: u64,
        new_owner: Address,
    ) {
        let token_key = Symbol::new(&env, &token_id.to_string().into());

        let mut nft: NFT = env.storage().instance().get(&token_key).unwrap();

        nft.charity_address = new_owner;

        env.storage().instance().set(&token_key, &nft);
    }
}

mod test;