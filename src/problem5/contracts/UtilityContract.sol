pragma solidity ^0.8.0;

abstract contract TokenContract {
    function balanceOf(address _owner) public view virtual returns (uint balance);
}

contract UtilityContract {

    struct Balance {
        address token;
        uint balance;
    }

    function getBalances(address _walletAddress, address[] memory _tcAddresses) public view returns (Balance[] memory) {

        Balance[] memory balances = new Balance[](_tcAddresses.length);

        for (uint i = 0; i < _tcAddresses.length; i++) {

            address tcAddress = _tcAddresses[i];

            TokenContract tc = TokenContract(tcAddress);

            uint balance = tc.balanceOf(_walletAddress);

            balances[i] = Balance(tcAddress, balance);

        }

        return balances;
    }

}
