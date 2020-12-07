import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const remove = 'playlist-remove';
  const add = 'playlist-plus';
  const edit = 'playlist-edit';
  const removeAll = 'delete-sweep-outline';
  const check = 'playlist-check';

  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  const [editOn, setEditOn] = useState();
  const [editInput, setEditInput] = useState();

  const Add = () => {
    if (input === '' || input === ' ') {
      alert('Enter SomeThing');
    } else {
      setList([input, ...list]);
      setInput('');
    }
  };

  const RemoveAll = () => {
    setList([]);
  };

  const Remove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const Edit = (index) => {
    setEditOn(index);
  };

  const Check = (index) => {
    if (editInput === '' || editInput === ' ') {
      alert('Enter SomeThing');
    } else {
      setEditOn();

      const newList = [...list];
      newList.splice(index, 1, editInput);
      setList(newList);

      setEditInput('');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <Text style={styles.heading}>Todo App</Text>
      </View>
      <ScrollView>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="Enter Todo"
            placeholderTextColor="#a0a0d0"
            underlineColorAndroid="transparent"
            value={input}
            onChangeText={(text) => {
              setInput(text);
            }}
          />
          <Icon name={add} size={40} color="#f2e9e4" onPress={() => Add()} />
          <Icon
            name={removeAll}
            size={40}
            color="#f2e9e4"
            onPress={() => RemoveAll()}
          />
        </View>
        <View
          style={{
            borderBottomColor: '#f2e9e4',
            borderBottomWidth: 2,
          }}
        />

        <View>
          {list.map((value, index) => {
            return (
              <>
                <View style={styles.list}>
                  <Text
                    style={{
                      color: '#f2e9e4',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {index + 1}.
                  </Text>
                  {editOn == index ? (
                    <TextInput
                      style={styles.edit}
                      placeholder="Enter changes"
                      placeholderTextColor="#a0a0d0"
                      underlineColorAndroid="transparent"
                      value={editInput}
                      onChangeText={(text) => {
                        setEditInput(text);
                      }}
                    />
                  ) : (
                    <Text style={styles.todo}>{value}</Text>
                  )}
                  {editOn == index ? (
                    <Icon
                      name={check}
                      size={36}
                      color="#f2e9e4"
                      onPress={() => Check(index)}
                    />
                  ) : (
                    <Icon
                      name={edit}
                      size={36}
                      color="#f2e9e4"
                      onPress={() => Edit(index)}
                    />
                  )}
                  <Icon
                    name={remove}
                    size={36}
                    color="#f2e9e4"
                    onPress={() => Remove(index)}
                  />
                </View>
                <View
                  style={{
                    borderBottomColor: '#f2e9e4',
                    borderBottomWidth: 2,
                  }}
                />
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22223B',
    height: '100%',
  },
  heading: {
    fontSize: 50,
    color: '#C9ADA7',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#4A4E69',
  },
  input: {
    height: 40,
    width: 220,
    padding: 5,
    color: '#f2e9e4',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#f2e9e4',
  },
  box: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderColor: "#9A8C98",
    alignItems: 'center',
  },
  todo: {
    fontSize: 20,
    color: '#f2e9e4',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
  },
  edit: {
    borderColor: '#f2e9e4',
    borderRadius: 5,
    borderWidth: 3,
    width: 170,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    height: 36,
    color: '#f2e9e4',
  },
});
