

#include <iostream>
using namespace std;

int main() {
    string studentName;
    string age;
    string gender;

    cout << "----Student Information----" << endl;

    cout << "Enter Student Name: ";
    getline(cin, studentName);

    cout << "Age: ";
    getline(cin, age);

    cout << "Gender: ";
    getline(cin, gender);

    return 0;
}
