#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
	int t,n,l,r,a,b,p,arr[315];
	cin >> t;
	for(int i=0;i<t;i++)
	{
	    cin>>n;
	    cin>>arr[n];
	    for(l=0;l<n-1;l++)
	    {
	        for(r=l+1;r<=n-1;r++)
	        {
	            a=max_element(arr[l],arr[r]);
	            b=min_element(arr[l],arr[r]);
	            if(p<a+b){p=a*b;}
	            else;
	        }
	    }
	    cout<<p;
	}
	return 0;
}
