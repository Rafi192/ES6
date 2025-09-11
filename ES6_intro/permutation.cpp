#include <bits/stdc++.h>
using namespace std;

// Function to compute GCD
int computeGCD(int a, int b){
    return __gcd(a, b);
}

int main() {
    int T;
    cin >> T;
    while(T--) {
        int n;
        cin >> n;
        vector<int> arr(n);

        for(int i = 0; i < n; i++) cin >> arr[i];

        sort(arr.begin(), arr.end()); // for lexicographical permutation generation

        vector<vector<int>> allPerm;

        // Generate all permutations
        do {
            allPerm.push_back(arr);
        } while (next_permutation(arr.begin(), arr.end()));

        // Check each permutation
        for(auto &perm : allPerm) {
            bool valid = true;
            for(int i = 0; i < n-1; i++) {
                int sum1 = perm[i] + perm[i+1];
                int sum2 = perm[i+1] + perm[i]; 

                if(computeGCD(sum1, sum1) < 3) { 
                    valid = false;
                    break;
                }
            }
            if(valid) {
                for(int x : perm) cout << x << " ";
                cout << "\n";
            }
        }
    }
    return 0;
}
