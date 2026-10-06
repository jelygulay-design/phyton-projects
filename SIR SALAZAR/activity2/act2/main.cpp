
#include <iostream>
#include <string>
#include <vector>
#include <limits> // para sa cin.ignore
using namespace std;

class Student {
private:
    string name;
    int age;
    double grade;

public:
    Student(string n, int a, double g) {
        name = n;
        age = a;
        grade = g;
    }

    void displayInfo(int index) {
        cout << index << ". Name: " << name
             << ", Age: " << age
             << ", Grade: " << grade << endl;
    }
};

int main() {
    vector<Student> students;
    int numberOfStudents;

    cout << "How many students do you want to enter? ";
    cin >> numberOfStudents;
    cin.ignore(numeric_limits<streamsize>::max(), '\n'); // IMPORTANT: clear buffer

    for (int i = 0; i < numberOfStudents; i++) {
        string name;
        int age;
        double grade;

        cout << "\nStudent " << i + 1 << endl;

        cout << "Enter student name: ";
        getline(cin, name); // para makuha buong pangalan kahit may space

        cout << "Enter student age: ";
        cin >> age;

        cout << "Enter student grade: ";
        cin >> grade;

        cin.ignore(numeric_limits<streamsize>::max(), '\n'); // clear buffer ulit

        Student s(name, age, grade);
        students.push_back(s);
    }

    cout << "\n===== STUDENT LIST =====" << endl;
    for (int i = 0; i < students.size(); i++) {
        students[i].displayInfo(i + 1);
    }

    return 0;
}
