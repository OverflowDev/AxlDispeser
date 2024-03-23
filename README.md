# Node Project Setup Guide

This guide provides step-by-step instructions for setting up a Node.js project using a provided repository. Follow the steps below to configure the project and execute it successfully.

## Prerequisites

- Node.js installed on your machine
- Basic knowledge of command line interface (CLI)

## Steps

1. **Clone the Repository**: 

Clone the repository to your local machine using the following command:

    ```
    $ git clone https://github.com/OverflowDev/AxlDispeser.git
    ```


2. **Navigate to the Project Directory**: 

Change your current directory to the cloned repository's path:

        ```
        $ cd AxlDispeser
        ```


3. **Copy Environment Variables File**:

Copy the `.env.example` file to `.env`. You can either manually duplicate the file or use the following command:

    ```
    $ cp .env.example .env
    ```



4. **Edit the `.env` File**:

Open the `.env` file in a text editor and replace the placeholder with your Private Key.


5. **Install Dependencies**:

Run the following command to install the project dependencies:

    ```
    $ npm install
    ```



6. **Configuration in `index.js`**:

Open `index.js` in a text editor and make the following modifications:

- **Line 6**: Set the `AXELAR_RPC` variable to your RPC.
- **Line 21**: Fill the array with the recipient addresses.
- **Line 29**: Adjust the loop number according to your requirements.
- **Line 34**: You can adjust the amount to send. Note the conversion: 1000 uaxl = 0.001 AXL.

7. **Run the Project**:

Execute the following command to run the Node.js project:

     ```
    $ node index.js
    ```




## Troubleshooting

- **Fetch Failed**: If you encounter a fetch failure, the project might not be functioning correctly. 
- **Transaction Error**: If you encounter a "Transaction Failed: assertIsBroadcastTxSuccess is not a function" error, the project is likely running as expected. You can scan the explorer to check the transaction hash.

## Additional Notes

- Make sure to follow any specific instructions provided by the repository or project documentation.
- For any issues or inquiries, refer to the project's documentation or reach out to the project maintainers for assistance.

With these steps completed, you should have successfully set up and executed the Node.js project. Happy coding!
