import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (option) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${option}`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Pendientes</Text>
      <View style={styles.buttonContainer}>
        <Button title="IDs" onPress={() => fetchData('')} />
        <Button title="IDs y títulos" onPress={() => fetchData('?_fields=id,title')} />
        <Button title="Sin resolver" onPress={() => fetchData('?completed=false')} />
        <Button title="Resueltos" onPress={() => fetchData('?completed=true')} />
        <Button title="ID y userID" onPress={() => fetchData('?_fields=id,userId')} />
      </View>
      {isLoading ? (
        <Text>Cargando...</Text>
      ) : (
        <View style={styles.listContainer}>
          {todos.map(todo => (
            <Text key={todo.id}>{todo.id} - {todo.title}</Text>
          ))}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
  },
});
