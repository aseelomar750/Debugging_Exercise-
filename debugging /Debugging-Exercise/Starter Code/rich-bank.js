const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300},
	{id: 7, owner: "Aseel", balance: 700}

	
];

function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id === id)
		{
			return account;
		}
	}
}

function createAccount (newAccountId, newAccountOwner)
{
	const account = getAccountById(newAccountId);

	if (account)
	{
		throw new Error("Account already exists.");
	}
	if (!Number.isFinite(newAccountId) || newAccountId <= 0)
		{
			throw new Error("Invalid value for account ID: The account ID must be a positive finite integer.");
		}
		if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "")
			{
				throw new Error("Invalid account owner: The account owner must be a non-empty string.");
			}

		accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: "0"
		}
	);
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found");
	}
	if (!Number.isFinite(amount) || amount <= 0)// to Check if the depsit balance is a negative amount 

		{
			throw new Error("Invalid value for deposit amount: The amount must be a positive finite number.");
		}


	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a positive finite number.");
	}

	if (account.balance < amount)
	{
		throw new Error("Insufficient funds for withdrawal.");
	}

account.balance -= amount;
	// return account.balance;
}
function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount)
	{
		throw new Error("Source account not found.");
	}
	if (!toAccount){
            throw new Error("Destination account not found.");
        }

    if (fromAccount.balance < amount)

	if (!Number.isFinite(amount) || amount < 0) // to check if the id nnumber  is negative or less than zero
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}
	if (fromAccount.balance < amount)
		{
			throw new Error("Insufficient funds for transfer.");
		}
	

	fromAccount.balance -= amount;
	toAccount.balance += amount;
}

//console.log(getAccountById(1)); / I fixed Account holders can view their accounts using their ID
// console.log(createAccount(1, "Alice"));

/*
Hints:
getAccountById("1");

createAccount(1, "Alice"); // fixed 
createAccount("3", "Charlie"); // fixed
createAccount(-3, "Charlie"); // fixed	 
createAccount(3, ["Charlie"]); // fixed
createAccount(3, "");// fixed
createAccount(3, "  "); // fixed

depositMoney(1, "300") // fixed
depositMoney(1, -300)// fixed
depositMoney(1, 0) // fixed the amount must be positive amount
depositMoney(1, Infinity)
depositMoney(4, 100) // fixed the  deposit amount must  to be only on exected accounts

withdrawMoney(1, -100) // fixed the amount must be positive amount
withdrawMoney(1, 0)// fixed the amount must be positive amount
withdrawMoney(1, 501)// fixed Insufficient funds for withdrawal

transferMoney(1, 4, 100) // fixed Destination account not found.
transferMoney(1, 2, 501); // Insufficient funds for transfer.
transferMoney(1, 2, 100); // it worked 
*/
