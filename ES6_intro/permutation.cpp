#include <bits/stdc++.h>
using namespace std;

int main() {

    int T;
    cin>>T;
    while(T--){
        int n;
        cin>>n;

        vector<int> arr =n;
        for(int x: arr){
            cin>>x;
        }

    sort(arr.begin(), arr.end()); // ensure starting from smallest lexicographic order

    do {
        for (int x : arr) cout << x << " ";
        cout << "\n";
    } while (next_permutation(arr.begin(), arr.end()));



    for(auto &perm :allPerm){

    }
    }

    
    return 0;
}
