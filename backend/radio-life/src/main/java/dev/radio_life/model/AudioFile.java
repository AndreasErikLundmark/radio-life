package dev.radio_life.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class AudioFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String audioName;
    String filePath;
    Long fileSize;

    public AudioFile(String fileName, String filePath, Long fileSize) {
        this.filePath = filePath;
        this.audioName = fileName;
        this.fileSize = fileSize;
    }

    public AudioFile() {

    }

    public String getFilePath() {
        return filePath;
    }

    public Long getId() {
        return id;
    }

    public String getAudioName() {
        return audioName;
    }

    public Long getFileSize() {
        return fileSize;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AudioFile audioFile)) return false;
        return Objects.equals(id, audioFile.id) && Objects.equals(audioName, audioFile.audioName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, audioName);
    }

    @Override
    public String toString() {
        return "AudioFile{" +
                "id=" + id +
                ", audioName='" + audioName + '\'' +
                ", fileSize='" + fileSize + '\'' +
                '}';
    }
}
