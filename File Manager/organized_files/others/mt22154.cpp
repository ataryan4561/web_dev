#include<bits/stdc++.h>
#include <string>
using namespace std;
class Bank
{
    protected:
	int accountno;
	string name;
	string dob;
	char gender;
    char accounttype;
    int amt;
    int yearofopen;
    char offering='N';
    public:
    Bank(int accountno,string name,string dob,char gender,char accounttype,int amt,int yearofopen)
    {
        this->accountno=accountno;
        this->name=name;
        this->dob=dob;
        this->gender=gender;
        this->accounttype=accounttype;
        this->amt=amt;
        this->yearofopen;
    }
    Bank()
    {

    }
    void withdrawal()
    {
        cout<<"Enter the amount to be cut"<<endl;
        int g;
        cin>>g;
        if(accounttype=='F')
        {
            if(2022-yearofopen<1)
            {
                cout<<"Withdrawal not possible"<<endl;
            }
            else
            {
                cout<<"Withdrwal possible"<<endl;
                amt=amt-g;
            }
        }
        else
        {
            if(amt-g>=0)
            {
                amt=amt-g;
                
            }
            else
            {
                cout<<"Not possible"<<endl;
            }
        }
        cout<<amt<<endl;
    }
    void deposit()
    {
        int de;
        cin>>de;
        if(de<0)
        {
            cout<<"Wrong"<<endl;
        }
        else
        {
            amt=amt+de;
        }
        cout<<amt<<endl;
    }
    void interest()
    {
        if(accounttype=='F')
        {
            amt=amt+amt*0.1*(2022-yearofopen);
        }
        else if(accounttype=='S')
        {
            amt=amt+amt*0.06*(2022-yearofopen);
        }
        else if(accounttype=='C')
        {
            amt=amt+amt*0.03*(2022-yearofopen);
        }
        else
        {

        }
        cout<<amt<<endl;
    }
    int getbalance()
    {
        return amt;
    }
    void offeringof()
    {
    cout<<"Select the keywords for the offering"<<endl;
    cout<<"For priority queyuing press P"<<endl;
    cout<<"For personal manager press M"<<endl;
    cout<<"For cash delivered at home press C"<<endl;
    cin>>offering;
    }
    string getofferingcheck()
    {
        if(offering=='C')
        {
            return "Customer need Cash";
        }
        else if(offering=='P')
        {
            return "Need Priority queying";
        }
        else if(offering=='M')
        {
            return "Need personal manager";
        }
        else
        {
            return "Need no Offering";
        }
    }
};
void datafile(vector<Bank> &b,int i)
{
    fstream file;
    string word, t, q, filename;
    filename = "file.txt";
    file.open(filename.c_str());
    int j=0;
    int accountno;
    string name;
    string dob;
    char gender;
    char accounttype;
    int amt;
    int yearofopen;
    while (file >> word)
    {
        if(j==6)
        {
            j=0;
            b.push_back(Bank(accountno,name,dob,gender,accounttype,amt,yearofopen));
            i++;
        }
        if(j==0)
        {
            accountno=stoi(word);
        }
        if(j==1)
        {
            name=word;
        }
        if(j==2)
        {
            gender=word[0];
        }
        if(j==3)
        {
            accounttype=word[0];
        }
        if(j==4)
        {
            amt=stoi(word);
        }
        if(j==5)
        {
            yearofopen=stoi(word);
        }
        j++;
    }
}
int main()
{
    cout<<"Hello Welcome to my bank"<<endl;
    cout<<"Enter your details"<<endl;
    char c='Y';
    vector<Bank> b;
    int i=0;
    int flag;
    cout<<"Did need data file handling"<<endl;
    cin>>flag;
    if(flag==1)
    {
        datafile(b,i);
    }
    else
    {

    }
    while(c=='Y')
    {
        int accountno;
        string name;
        string dob;
        char gender;
        char accounttype;
        int amt;
        int yearofopen;
        char offering='N';
        cin>>accountno>>name>>dob>>gender>>accounttype>>amt>>yearofopen;
        b.push_back(Bank(accountno,name,dob,gender,accounttype,amt,yearofopen));
        int f;
        cout<<"what you want"<<endl;
        cout<<"1-Deposit"<<endl;
        cout<<"2-withdrwal"<<endl;
        cout<<"3-get balance"<<endl;
        cout<<"4-offering"<<endl;
        cin>>f;
        if(f==1)
        {
            b[i].deposit();
            // cout<<b1.getbalance();
        }
        else if(f==2)
        {
            b[i].withdrawal();
            // cout<<b1.getbalance();
        }
        else if(f==3)
        {
            cout<<b[i].getbalance()<<endl;
        }
        else if(f==4)
        {
            b[i].offeringof();
            cout<<b[i].getofferingcheck();
        }
        else
        {
            
        }
        cout<<"Do you want to add more type Y or N "<<endl;
        char c;
        cin>>c;
        if(c=='N')
        {
            break;
        }
        i++;
    }
}